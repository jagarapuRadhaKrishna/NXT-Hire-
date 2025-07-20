import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { DSAAnalytics } from "@/lib/analytics/realtime-analytics";

export async function POST(request) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const problemData = await request.json();
    
    // Create analytics instance with user ID
    const analytics = new DSAAnalytics(user.id);
    const updatedProgress = await analytics.updateProgress(problemData);

    // Trigger real-time sync
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/analytics/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'manual', type: 'dsa' })
      });
    } catch (syncError) {
      console.log("Real-time sync failed:", syncError);
    }

    return NextResponse.json({ 
      success: true, 
      progress: updatedProgress,
      message: "Progress updated successfully"
    });
  } catch (error) {
    console.error("Error updating DSA progress:", error);
    return NextResponse.json(
      { error: "Failed to update progress", details: error.message }, 
      { status: 500 }
    );
  }
}
