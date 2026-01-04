// Client page logic
import { supabase } from './supabase.js';
import { getCurrentUser } from './auth.js';

export async function initClient() {
    const user = await getCurrentUser();
    
    if (!user) {
        window.location.href = '/login.html';
        return;
    }
    
    // Client page initialization
    console.log('Client page initialized');
}

// Initialize on page load
initClient();

