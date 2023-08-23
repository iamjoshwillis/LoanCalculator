
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 16,
    rate: 11.6
  };
  expect(calculateMonthlyPayment(values)).toEqual('260.88');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 16,
    rate: 11.6
  };
  expect(calculateMonthlyPayment(values)).toEqual('260.88');
});
