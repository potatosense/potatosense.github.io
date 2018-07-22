define ([], function () {
  return function () {
    return {
      "&:before, &:after" : {
        content: "''",
        display: "table"
      },
      "&:after": {
        clear: "both"
      }
    }
  }
});
