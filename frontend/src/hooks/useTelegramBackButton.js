import { useEffect } from 'react';
import { backButton, onBackButtonClick } from '@telegram-apps/sdk';
import { useNavigate, useLocation } from 'react-router-dom';

export const useTelegramBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!backButton?.isSupported()) return;

    // Mount & show back button
    if (backButton.mount?.isAvailable()) backButton.mount();
    if (backButton.show?.isAvailable()) backButton.show();

    const handleBack = () => {
      if (location.pathname !== '/') {
        navigate(-1);
      } else {
        // hide back button on home
        if (backButton.hide?.isAvailable()) backButton.hide();
      }
    };

    let offClick;
    if (onBackButtonClick?.isAvailable()) {
      offClick = onBackButtonClick(handleBack);
    }

    // Cleanup function
    return () => {
      if (typeof offClick === 'function') offClick();
      if (backButton.unmount?.isAvailable()) backButton.unmount();
    };
  }, [location, navigate]);
};