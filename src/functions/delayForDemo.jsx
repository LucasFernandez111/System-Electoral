function delayForDemo(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default delayForDemo;
