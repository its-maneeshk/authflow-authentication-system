// src/components/Background.jsx
import React, { useEffect, useRef } from 'react';

const Background = () => {
  const outputRef = useRef(null);

  useEffect(() => {
    const n = []; // your ASCII frames here (inserted below)
    // NOTE: Load only the first few frames to avoid browser overload
    n[0] = `                                                                                                    
                                                                                                    
                                                  ,i                                                
                      ,i,                                                                           
                      ,f:                                                                           
                   ,.                                                                               
                   i,                ..                                                             
                                    .ff.                                                            
                                    1CL;                                                            
                                   ;CCCf.                                 ,L;                       
                            .     :CCCLf;                            ..   .:,                       
         ,:.                it:  :CCGCCLC1;:,,.                      ;:                             
         1G1                .ff::G888888@@88880GLf1;,.                                              
          .:i.               tCG8880000000@@@@@@@@@@80Cf1:.                                         
            ;L,            .10800CGGCGCGfC0G088888@@@@@@@@8Ct:                                      
             1C:        .;L0800GGGCLLLLLfffLLLLLffC00C0888@@@8C;                                    
    .        .LC;    ,;f080GCCLLLLfLffGCfLCCCLLLLCLffffG@@@@8@@@C,                                  
    ,         tLLGffLGG0CLfffffffffffGCffLCLffffC@8LffffLG008888@8:                                 
              fLCCii1fLLLLffffffffffLGffLLCLfffC0@0ffffffffffLLLLLt                                 
             :GC:     ,ifLLfffffffffLGffLLLffffG8Gfffffffffffffffff,                                
            :Lf,         ;ffffffLLLLfGLfffffffffffffffffffffffLLCLL:                       .;       
           :1:            ;LLLLLLLLLfLGfCffffffffLLLfffLCCG0088@0t:                        .:       
           .            .:Lf1ifCCLLLLfCCLCCLfffffCCLffG00000GGGCf1i.                                
`;

    let i = 0;
    const interval = setInterval(() => {
      if (outputRef.current) {
        outputRef.current.textContent = n[i % n.length];
        i++;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-500 font-mono text-sm p-4 rounded shadow overflow-auto h-64" ref={outputRef}>
      Loading ASCII animation...
    </div>
  );
};

export default Background;
