import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { RealTimeSync } from "@/lib/analytics/realtime-analytics";

export async function POST(request) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { action, type = 'both' } = await request.json();

    // Create sync instance
    const syncService = new RealTimeSync();

    if (action === 'manual') {
      const data = await syncService.manualSync(user.id);
      return NextResponse.json(data);
    }

    switch (action) {
      case 'start':
        syncService.startSync(user.id, type);
        break;
      case 'stop':
        syncService.stopSync(user.id, type);
        break;
      case 'status':
        const status = syncService.getSyncStatus(user.id);
        return NextResponse.json({ status });
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Real-time Sync Error:', error);
    return NextResponse.json(
      { error: "Failed to manage real-time sync" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!realTimeSync) {
      return NextResponse.json({ 
        status: { linkedin: false, dsa: false, both: false } 
      });
    }

    const status = realTimeSync.getSyncStatus(user.id);
    return NextResponse.json({ status });
  } catch (error) {
    console.error('Sync Status Error:', error);
    return NextResponse.json(
      { error: "Failed to get sync status" },
      { status: 500 }
    );
  }
}
