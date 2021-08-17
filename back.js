setTimeout(() => {
    console.log('Print this and wait');
    setTimeout(() => {
      console.log('Do something else and wait');
      setTimeout(() => {
        // ...
      }, 100);
    }, 100);
  }, 100)