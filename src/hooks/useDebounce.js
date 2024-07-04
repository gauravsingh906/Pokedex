function useDebounce(cb, delay=2000){
   let timerId;
   return ((...args)=>{
    console.log(...args)
     clearTimeout(timerId);
     timerId=setTimeout(()=>{
        cb(...args);
     }, delay)
   }
  )
}



export default useDebounce;

// ----------------------------------------check useDebounce method
// function myFunction(input) {
//     console.log(input);
// }

// const debouncedFunction = useDebounce(myFunction, 1000);

// debouncedFunction('Hello'); // This will log 'Hello' after a 1000ms delay.
// debouncedFunction('World');