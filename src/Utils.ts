declare global {
  interface Window { 
    TSXNA:any 
  }
}

export default class Utils
{
  
    public static Copy<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    public static DeepCopy<T>(obj: T): T {
        if (obj === null) {
          return obj;
        }
        if (obj instanceof Date) {
          return new Date(obj.getTime()) as any;
        }
        if (obj instanceof Array) {
          const cp = [] as any[];
          (obj as any[]).forEach((v) => { cp.push(v); });
          return cp.map((n: any) => Utils.DeepCopy<any>(n)) as any;
        }
        if (typeof obj === 'object' && obj !== {}) {
          const cp = { ...(obj as { [key: string]: any }) } as { [key: string]: any };
          Object.keys(cp).forEach(k => {
            cp[k] = Utils.DeepCopy<any>(cp[k]);
          });
          return cp as T;
        }
        return obj;
    };  

    /**
     * @description a set of random function to help
     */
   public static Random = {
    /**
     * @description Return a random string ID
     */
    ID : () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
    
   };

        
}