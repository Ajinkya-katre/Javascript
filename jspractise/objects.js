
avchart =[
    {dashboardid:1,height:100,width:100,posx:10,posy:10},
    {dashboardid:2,height:200,width:200,posx:20,posy:20}
]



const avaliableCharts = {
    qbrid:1,
    menuid:4,
    dashboards:[{
        dashboardid:avchart.dashboardid,
        height:avchart.height,
        width:avchart.width,
        posx:avchart.posx,
        posy:avchart.posy
    }]
    
}


avchart.forEach(element => {
    console.log("Element", element.dashboardid);
});

// console.log("Avaiable Charts", avaliableCharts);