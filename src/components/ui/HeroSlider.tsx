@@ .. @@
             {/* Buttons - Updated text */}
             <motion.div
               className="flex flex-col md:flex-row justify-center gap-4 mt-10"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.5 }}
             >
-              <Button to="/gallery" variant="primary" size="lg" className="group">
+              <Button to="/products" variant="primary" size="lg" className="group">
                 Explore Our Kits
               </Button>
-              <Button to="/contact" variant="outline" size="lg" className="group">
+              <Button 
+                to="/contact#book-call-section" 
+                variant="outline" 
+                size="lg" 
+                className="group"
+                onClick={(e) => {
+                  e.preventDefault();
+                  window.location.href = '/contact#book-call-button';
+                }}
+              >
                 Book a Call
               </Button>
             </motion.div>