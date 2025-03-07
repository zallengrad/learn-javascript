function fibonacci(n) {
    if (n === 0) {
      return [0];
    }

    if (n === 1) {
      return [0, 1];
    }
    // Rekursi
    const prevSequence = fibonacci(n - 1); 
    const nextValue = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2]; 
    return [...prevSequence, nextValue]; 
  }

// Jangan hapus kode di bawah ini!
export default fibonacci;
