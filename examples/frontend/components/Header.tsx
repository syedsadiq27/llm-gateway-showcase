// Example: Professional Header Component
// This is a sanitized version showing the component structure

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
  onSidebarToggle?: () => void;
}

export default function Header({ 
  title = "LLM Gateway",
  onSidebarToggle
}: HeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="header-professional">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left side - Page title */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-foreground">
            {title}
          </h1>
        </div>

        {/* Right side - User menu and actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200">
            <NotificationIcon />
          </button>

          {/* Search */}
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200">
            <SearchIcon />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              <UserAvatar />
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                <div className="py-1">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={() => {/* logout logic */}}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Icon components (simplified)
const NotificationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5M15 17l-5-5M15 17v-2a6 6 0 00-6-6H7" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserAvatar = () => (
  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
    <span className="text-primary-foreground text-sm font-medium">U</span>
  </div>
);
