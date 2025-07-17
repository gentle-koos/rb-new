@@ .. @@
       <div className="mt-auto">
-        <Button to={ctaLink} variant="outline" size="md">
+        <Button 
+          to={ctaLink} 
+          variant="outline" 
+          size="md"
+          onClick={ctaLink.includes('#get-quote-button') ? (e) => {
+            e.preventDefault();
+            window.location.href = ctaLink;
+          } : undefined}
+        >
           {ctaText}
         </Button>
       </div>