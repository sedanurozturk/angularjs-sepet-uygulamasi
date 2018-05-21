 var app = angular.module("sepet", []);
 app.controller('sepetController', function($scope) {
     $scope.urunler = [{
             id: 1,
             adi: "Ayakkabı 1",
             fiyat: 50
         },
         {
             id: 2,
             adi: "Ayakkabı 2",
             fiyat: 120
         },
         {
             id: 3,
             adi: "Ayakkabı 3",
             fiyat: 230
         },
         {
             id: 4,
             adi: "Ayakkabı 4",
             fiyat: 90
         }
     ];
     $scope.sepetlist = [];
     

     $scope.ekle = function(yeniDeger) {
         if ($scope.sepetlist.length == 0) {
            yeniDeger.adet = 1;
           yeniDeger.uruntoplam = yeniDeger.fiyat;
           $scope.toplamfiyat =yeniDeger.uruntoplam;
            $scope.sepetlist.push(yeniDeger);
         }
         else{
             var tekrarEklendi = false;
             for (var i = 0; i < $scope.sepetlist.length; i++) {
                    if ($scope.sepetlist[i].id == yeniDeger.id) {
                        tekrarEklendi = true;
                        $scope.sepetlist[i].adet++;
                        yeniDeger.uruntoplam  += $scope.sepetlist[i].fiyat;
                        $scope.toplamfiyat+= $scope.sepetlist[i].fiyat;

                    }

             }
             if (!tekrarEklendi) {
                 yeniDeger.adet=1;
                 yeniDeger.uruntoplam = yeniDeger.fiyat;
                 $scope.toplamfiyat+= yeniDeger.uruntoplam;
                 $scope.sepetlist.push(yeniDeger);
             }
         }
     }
 });