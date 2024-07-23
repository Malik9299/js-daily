const credits = ((num) => {
  let credits = num;
  console.log(`Initial value of credits: ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0)
      console.log(`Playing game, ${credits} credit(s) remaining`);
    if (credits <= 0) console.log("Not enohgh credits");
  };
})(3);
credits();
credits();
credits();
credits();
credits();
credits();
