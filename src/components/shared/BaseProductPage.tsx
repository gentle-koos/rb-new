@@ .. @@
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="pt-6 space-y-4"
               >
-                <Button to="/contact" variant="primary" size="lg" className="w-full">
+                <Button 
+                  to="/contact#get-quote-button" 
+                  variant="primary" 
+                  size="lg" 
+                  className="w-full"
+                  onClick={(e) => {
+                    e.preventDefault();
+                    window.location.href = '/contact#get-quote-button';
+                  }}
+                >
                   Get Team Quote
                 </Button>
-                <Button to="/contact" variant="outline" size="lg" className="w-full">
+                <Button 
+                  to="/contact#get-quote-button" 
+                  variant="outline" 
+                  size="lg" 
+                  className="w-full"
+                  onClick={(e) => {
+                    e.preventDefault();
+                    window.location.href = '/contact#get-quote-button';
+                  }}
+                >
                   Request Sample
                 </Button>
               </motion.div>
@@ .. @@
            >
             <h2 className="text-4xl font-bebas mb-6">Ready to Order Your {title}?</h2>
             <p className="text-rb-gray-300 mb-8">
               Contact our team to discuss your requirements
             </p>
-            <Button to="/contact" variant="primary" size="lg">
+            <Button 
+              to="/contact#get-quote-button" 
+              variant="primary" 
+              size="lg"
+              onClick={(e) => {
+                e.preventDefault();
+                window.location.href = '/contact#get-quote-button';
+              }}
+            >
               Get a Quote
             </Button>
           </motion.div>