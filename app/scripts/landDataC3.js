var chart = c3.generate({
  data: {
      x : 'x',
        columns: [
          ["x", "Albania","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bangladesh","Belarus","Belgium","Belize","Benin","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Chad","Chile","China","Colombia","Congo, Republic of the","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominican Republic","Ecuador","Egypt","El Salvador","Eritrea","Estonia","Ethiopia","Finland","France","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia","Germany","Ghana","Greece","Guatemala","Guinea","Haiti","Honduras","Hong Kong","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Korea, North","Korea, South","Kyrgyzstan","Laos","Latvia","Lebanon","Liberia","Macedonia","Madagascar","Malawi","Malaysia","Mali","Marshall Islands","Mauritania","Mauritius","Mexico","Moldova","Mongolia","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Romania","Russia","Rwanda","Saint Lucia","Samoa","Senegal","Serbia and Montenegro","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Zambia","Zimbabwe"],
          ["land water area", 1350, 43710,1540,58459,1426,500,3870,13830,4700,250,160,2000,15280,10,15000,55352,54340,500,2390,400,2150,4520,2730,891163,24800,12290,270550,100210,500,40,4460,620,1040,10,1620,660,20,350,6720,6000,320,16600,2840,104300,34330,3374,340,79.8,10000,1295,8350,11000,1310,1730,140,190,200,50,2750,302393,93000,116600,950,1390,440,7200,160,13430,540,25200,11227,130,301,8150,6000,2340,170,15049,280,5501,24404,1190,20002,11673,4480,10,20430,960,10560,250,13000,2425,3830,7650,300,4395,10380,300,13000,19520,25220,1080,9980,9450,5220,44178,791,620,4921,8500,720500,1670,10,10,4192,115,120,10,930,122,910,10320,4620,6390,2878,113335.2,7820,160,39960,1280,1550,3720,2590,61500,2230,2400,30,8250,13930,18170,43938,24220,1680,364502,1200,22000,30000,21140,9220,3910],
          ["land area", 27398,2736690,28400,7617930,82444,86100,10070,133910,207600,30278,22806,110620,1084390,51129,585370,8456510,60,5270,110550,273800,25650,176520,469440,9093507,1259200,748800,9326410,1038700,341500,50660,318000,56414,110860,9240,77276,42394,22980,48380,276840,995450,20720,121320,43211,1119683,304473,640053,3660,7668,257667,10000,349223,230940,130800,108430,245857,27560,111890,1042,100250,2973190,1826440,1636000,432162,68890,20330,294020,10831,374744,91971,2669800,569250,120410,98190,191300,230800,63589,10230,96320,24856,581540,94080,328550,1220000,181.3,1030400,2030,1923040,33371,13452,446300,784090,825418,143181,33883,18575,268021,120254,1266700,910768,307442,778720,75990,452860,397300,1280000,298170,304465,91951,8870,230340,16995800,24948,606,2934,192000,102136,71620,682.7,48800,20151,27540,627337,1219912,499542,64740,2376000,161470,17203,410934,39770,184050,32260,142700,886037,511770,54385,718,155360,770760,488100,199710,603700,241590,9161923,173620,425400,882050,325360,740724,386670]
      ],
      groups: [
          ['land area', 'land water area']
      ],
      type: 'bar',
      labels: false
  },
  axis: {
      x: {
          type: 'category', // this needed to load string x value
           show: false
      },
      y: {
        max: 500000,
        show: false
      }
  }
});




