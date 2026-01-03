// Barber page logic
import { supabase } from './supabase.js';
import { getCurrentUser } from './auth.js';

export async function initBarber() {
    const user = await getCurrentUser();
    
    if (!user) {
        window.location.href = '/login.html';
        return;
    }
    
    // Barber page initialization
    console.log('Barber page initialized');
}

// Initialize on page load
initBarber();

