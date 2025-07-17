@@ .. @@
               <div className="mt-8">
-                <Button to="/contact" variant="primary">
-                  Work With Us
+                <Button 
+                  to="/contact#get-quote-button" 
+                  variant="primary"
+                  onClick={(e) => {
+                    e.preventDefault();
+                    window.location.href = '/contact#get-quote-button';
+                  }}
+                >
+                  Get a Quote
                 </Button>
               </div>