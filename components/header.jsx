"use client";

import React, { useState, useCallback, useMemo, memo } from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Code,
  MessageSquare,
  Search,
  Building2,
  Linkedin,
  X,
  Home,
  Target,
  Briefcase,
  TrendingUp,
  Users,
  Zap,
  Globe
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();

  // Memoized handlers to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const isActivePage = useCallback((path) => {
    return pathname === path;
  }, [pathname]);

  // Memoized menu items to prevent unnecessary re-renders
  const menuItems = useMemo(() => [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Career Insights", icon: TrendingUp },
    { href: "/resume", label: "Resume Builder", icon: FileText },
    { href: "/resume-analyzer", label: "Resume Analyzer", icon: Search },
    { href: "/interview", label: "Interview Prep", icon: Users },
    { href: "/ai-cover-letter", label: "Cover Letter Generator", icon: PenBox },
    { href: "/job-portal", label: "Job Portal", icon: Briefcase },
    { href: "/linkedin-optimizer", label: "LinkedIn Optimizer", icon: Linkedin },
    { href: "/application-tracker", label: "Application Tracker", icon: Target },
  ], []);

  // Optimized menu item component with better performance
  const MenuItemComponent = useCallback(({ item }) => {
    const isActive = pathname === item.href;
    const Icon = item.icon;
    
    return (
      <Link
        href={item.href}
        onClick={closeMenu}
        prefetch={true}
        className={`flex items-center gap-3 p-3 rounded-md transition-colors text-base ${
          isActive 
            ? 'bg-white text-black font-medium' 
            : 'text-white hover:bg-white/10'
        }`}
      >
        <Icon className={`h-5 w-5 ${isActive ? 'text-black' : 'text-blue-400'}`} />
        {item.label}
      </Link>
    );
  }, [pathname, closeMenu]);

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Animated Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-45 translate-y-2 bg-blue-400"
                  : "group-hover:bg-blue-400"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-0"
                  : "group-hover:bg-blue-400"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-blue-400"
                  : "group-hover:bg-blue-400"
              }`}
            ></div>
          </button>

          {/* Logo */}
          <Link href="/" prefetch={true} className="flex items-center gap-2 group">
            <Image
              src="/nxt-hire-logo-dark.jpg"
              alt="NXT Hire"
              width={140}
              height={48}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            {/* Home Button */}
            <Link href="/" prefetch={true}>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                <span className="hidden md:block">Home</span>
              </Button>
            </Link>

            <Link href="/dashboard" prefetch={true}>
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>

      {/* Animated Slide-out Menu */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-black border-r border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 space-y-3 min-h-full">
          <div className="flex items-center justify-between sticky top-0 bg-black p-3 -m-3 mb-2 rounded-lg border-b border-gray-700">
            <h2 className="text-lg font-bold text-white">Navigation</h2>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-700/50 rounded-md transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-1 pb-6">
            {user && (
              <>
                {menuItems.map((item, index) => (
                  <MenuItemComponent key={item.href} item={item} />
                ))}
              </>
            )}

            {!user && (
              <div className="text-center py-6 bg-gray-800/50 rounded-md">
                <p className="text-gray-300 mb-3 text-sm">Sign in to access all features</p>
                <SignInButton>
                  <Button variant="outline" onClick={closeMenu} className="text-sm">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/30 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;