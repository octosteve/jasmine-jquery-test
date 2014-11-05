function init(){
  $('.monitor').click(function(){
    $(this).text('Totally Clicked')
  })
}
describe("Monitoring Click Events", function(){
  it("knows when an item has been clicked", function(){
    jasmine.getFixtures().set("<div class='monitor'>Not Clicked</div>");
    init();
    $('.monitor').click();
    expect($('.monitor').text()).toEqual('Totally Clicked');
  })
})
