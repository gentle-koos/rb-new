@@ .. @@
   className?: string;
   onClick?: () => void;
+  onClick?: (e?: React.MouseEvent) => void;
   type?: 'button' | 'submit' | 'reset';
   disabled?: boolean;
 }
@@ .. @@
   if (to) {
     return (
       <motion.div
         whileHover="hover"
         whileTap="tap"
         variants={buttonVariants}
       >
-        <Link to={to} className={buttonClasses}>
+        <Link 
+          to={to} 
+          className={buttonClasses}
+          onClick={onClick}
+        >
           {children}
         </Link>
       </motion.div>