@@ .. @@
   return (
     <div className="w-full">
       {/* Action Buttons */}
-      <motion.div
   )
+      <motion.div
+        id="contact-options"
         className="mb-8"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
@@ .. @@
         <div className="flex flex-col md:flex-row gap-4">
           <button
+            id="get-quote-button"
             onClick={() => setActiveView('quote')}
             className={`flex-1 px-6 py-4 font-bebas text-lg tracking-wider transition-all duration-300 rounded-md ${
               activeView === 'quote'
             }
@@ .. @@
           </button>
           
           <button
+            id="book-call-button"
             onClick={handleBookCall}
             data-cal-link={`reckless-bear-demo/appointment-with-recklessbear?metadata[lead_id]=${leadId}`}
             data-cal-namespace="appointment-with-recklessbear"
@@ .. @@
       {/* Content based on active view */}
       {activeView === 'quote' && (
         <motion.div
       )
       }
+          id="quote-form-section"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
@@ .. @@
       {activeView === 'call' && (
         <motion.div
       )
       }
+          id="book-call-section"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}