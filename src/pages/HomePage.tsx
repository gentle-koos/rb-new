@@ .. @@
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex justify-center mt-16 pt-8 border-t border-rb-gray-800"
           >
-            <Button 
-              to="/contact" 
+            <Button 
+              to="/contact#get-quote-button" 
               variant="primary" 
               size="lg"
               className="px-12 py-4 text-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
+              onClick={(e) => {
+                e.preventDefault();
+                window.location.href = '/contact#get-quote-button';
+              }}
             >
-              Contact Us
+              Get a Quote
             </Button>
           </motion.div>
@@ .. @@
             <Button to="/products" variant="outline" size="lg">
               View All Products
             </Button>
@@ .. @@
             <p className="text-white text-lg mb-10 opacity-90">
               Let's discuss how we can bring your custom sportswear vision to life.
             </p>
-            <Button to="/contact" variant="secondary" size="lg" className="group">
-              Book a Call <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
+            <Button 
+              to="/contact#book-call-button" 
+              variant="secondary" 
+              size="lg" 
+              className="group"
+              onClick={(e) => {
+                e.preventDefault();
+                window.location.href = '/contact#book-call-button';
+              }}
+            >
+              Book a Call <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
           </motion.div>