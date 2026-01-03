// Supabase client configuration
import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = 'https://zgccivwafkzebtnrxrze.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnY2NpdndhZmt6ZWJ0bnJ4cnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODQ3MDIsImV4cCI6MjA4Mjk2MDcwMn0.nAbiF0YIIBBIkTiYx-A0S_35GiuBlnN-W0vFWJEBLOo';

export const supabase = createClient(supabaseUrl, supabaseKey);

