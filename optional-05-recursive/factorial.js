function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }


//   const a = factorial(5)
//   console.log(a)


// Jangan hapus kode di bawah ini!
export default factorial;
