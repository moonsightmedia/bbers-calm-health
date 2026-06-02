DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;
REVOKE INSERT ON public.contact_messages FROM anon, authenticated;