export const sideBarData = [
   {
      _id: 1,
      subMenus: [
         //CPU
         {
            title: {_id: 'cpu-boxuly', vi: 'Bộ xử lý', en: 'CPU'},
            items: [
               {_id: 'i-pentium', title: 'Intel Pentium'},
               {_id: 'i-celeron', title: 'Intel Celeron'},
               {_id: 'i-corei3', title: 'Intel Core i3'},
               {_id: 'i-corei5', title: 'Intel Core i5'},
               {_id: 'i-corei7', title: 'Intel Core i7'},
               {_id: 'i-corei9', title: 'Intel Core i9'},
               {_id: 'i-xeon', title: 'Intel Xeon'},
               {_id: 'amd-athlon', title: 'AMD Athlon'},
               {_id: 'amd-ryzen3', title: 'AMD Ryzen 3'},
               {_id: 'amd-ryzen5', title: 'AMD Ryzen 5'},
               {_id: 'amd-ryzen7', title: 'AMD Ryzen 7'},
               {_id: 'amd-ryzen9', title: 'AMD Ryzen 9'},
            ]
         },
         //MAINBOARD
         {
            title: {_id: 'mainboard-bomachchu', en: 'CPU', vi: 'Bộ xử lý'},
            items: [
               {_id: 'main-asus', title: 'Main ASUS'},
               {_id: 'main-asrock', title: 'Main ASROCK'},
               {_id: 'main-afox', title: 'Main AFOX'},
               {_id: 'main-colorful', title: 'Main COLORFUL'},
               {_id: 'main-gigabyte', title: 'Main GIGABYTE'},
               {_id: 'main-msi', title: 'Main MSI'},
               {_id: 'main-amd', title: 'Main AMD'},
               {_id: 'main-dongb', title: 'Main dòng B '},
               {_id: 'main-dongh', title: 'Main dòng H'},
               {_id: 'main-dongz', title: 'Main dòng Z'},
               {_id: 'main-hangkhac', title: 'Main hãng khác'},
            ]
         },
         //RAM
         {
            title: {_id: 'ram-bonhoram', en: 'RAM', vi: 'Bộ nhớ ram'},
            items: [
               {_id: 'ram-ddr3-pc', title: 'Ram DDR3 Pc'},
               {_id: 'ram-ddr4-pc', title: 'Ram DDR4 Pc'},
               {_id: 'ram-ddr5-pc', title: 'Ram DDR5 Pc'},
               {_id: 'ram-ddr3-server', title: 'Ram DDR3 Server'},
               {_id: 'ram-ddr4-server', title: 'Ram DDR4 Server'},
               {_id: 'ram-4gb-8gb', title: 'Ram 4GB, 8GB'},
               {_id: 'ram-16gb-32gb', title: 'Ram 16GB, 32GB'},
               {_id: 'ram-kit', title: 'Ram Kit'},
               {_id: 'ram-led', title: 'Ram Led'},
            ]
         },
         //VGA
         {
            title: {_id: 'vga-cardmanhinh', en: 'VGA', vi: 'Card màn hình'},
            items: [
               {_id: 'vga-asus', title: 'VGA Asus'},
               {_id: 'vga-colorful', title: 'VGA Colorful'},
               {_id: 'vga-gigabyte', title: 'VGA Gigabyte'},
               {_id: 'vga-msi', title: 'VGA MSI'},
               {_id: 'vga-galax', title: 'VGA Galax'},
               {_id: 'vga-palit', title: 'VGA Palit'},
               {_id: 'vga-zotac', title: 'VGA Zotac'},
               {_id: 'vga-amd', title: 'VGA AMD'},
               {_id: 'vga-gf-gtx-10-series', title: 'VGA Geforce® 10 GTX'},
               {_id: 'vga-gf-gtx-16-series', title: 'VGA Geforce® 16 GTX'},
               {_id: 'vga-gf-gtx-20-series', title: 'VGA Geforce® 20 GTX'},
               {_id: 'vga-gf-gtx-30-series', title: 'VGA Geforce® 30 GTX'},
               {_id: 'vga-nvidia-quadro', title: 'VGA Nvidia Quadro'},
            ]
         },
         //CASE
         {
            title: {_id: 'case-thungmay', en: 'Case', vi: 'Thùng máy'},
            items: [
               {_id: 'case-sama', title: 'Case Sama '},
               {_id: 'case-ximagtek', title: 'Case Ximatek'},
               {_id: 'case-vsp', title: 'Case VSP'},
               {_id: 'case-deepcool', title: 'Case Deepcool'},
               {_id: 'case-1st-player', title: 'Case 1st Player'},
               {_id: 'case-jetek', title: 'Case Jetek'},
               {_id: 'case-mik', title: 'Case Mik '},
               {_id: 'case-server-workstation', title: 'Case Server Workstation '},
               {_id: 'case-montech', title: 'Case Montech'},
               {_id: 'case-vanphong', title: 'Case Văn phòng'},
               {_id: 'case-gaming', title: 'Case Gaming'},
               {_id: 'case-fan', title: 'Fan Case'},
            ]
         },
         //CASE CAO CAP
         {
            title: {_id: 'case-cao-cap', en: 'Case', vi: 'Cao cấp'},
            items: [
               {_id: 'case-cooler-master', title: 'Case Cooler Master '},
               {_id: 'case-thermaltake', title: 'Case Thermaltake '},
               {_id: 'case-asus', title: 'Case Asus'},
               {_id: 'case-metallic', title: 'Case Metallic'},
               {_id: 'case-cougar', title: 'Case Cougar'},
               {_id: 'case-nzxt', title: 'Case NZXT'},
               {_id: 'case-msi', title: 'Case MSI '},
               {_id: 'case-gigabyte-aorus', title: 'Case Gigabyte Aorus '},
            ]
         },
         //PSU
         {
            title: {_id: 'psu-nguonmaytinh', en: 'psu', vi: 'Nguồn máy tính'},
            items: [
               {_id: 'nguon-aerocool', title: 'Nguồn Aerocool '},
               {_id: 'nguon-acbel', title: 'Nguồn Acbel'},
               {_id: 'nguon-asus', title: 'Nguồn Asus'},
               {_id: 'nguon-cooler-master', title: 'Nguồn Cooler Master '},
               {_id: 'nguon-corsair', title: 'Nguồn Corsair'},
               {_id: 'nguon-gigabyte', title: 'Nguồn Gigabyte'},
               {_id: 'nguon-jetek', title: 'Nguồn Jetek'},
               {_id: 'nguon-sama', title: 'Nguồn Sama'},
               {_id: 'nguon-duoi-400w', title: 'Nguồn dưới 400W '},
               {_id: 'nguon-400w-den-600w', title: 'Nguồn 400W đến 600W'},
               {_id: 'nguon-600w-den-800w', title: 'Nguồn 600W đến 800W'},
               {_id: 'nguon-tren-800w', title: 'Nguồn trên 800W'},
            ]
         }
      ]
   },
   {
      _id: 2,
      subMenus: [
         //GAME DESK
         {
            title: {_id: 'gamedesk-banchoigame', en: 'Game Desk', vi: 'Bàn chơi game'},
            items: [
               {_id: 'ban-gaming', title: 'Bàn Gaming'},
               {_id: 'ban-pc-chu-z', title: 'Bàn Pc chữ Z'},
               {_id: 'ban-phong-net', title: 'Bàn phòng net'},
               {_id: 'ban-theo-yeu-cau', title: 'Bàn theo yêu cầu'},
            ]
         },
         //GHE GAME
         {
            title: {_id: 'gamechair-ghechoigame', en: 'Game Chair', vi: 'Ghế chơi game'},
            items: [
               {_id: 'ghe-gaming', title: 'Ghế Gaming'},
               {_id: 'ghe-phong-net', title: 'Ghế phòng net'},
               {_id: 'ghe-sofa', title: 'Ghế Sofa'},
               {_id: 'ghe-chan-quy-lung-cao', title: 'Ghế chân quỳ lưng cao'},
               {_id: 'ghe-chan-quy-lung-thap', title: 'Ghế chân quỳ lưng thấp'},
            ]
         },
         //THIET BI CHO PHONG MAY TAP TRUNG
         {
            title: {_id: 'vga-cardmanhinh', en: 'VGA', vi: 'Card màn hình'},
            items: [
               {_id: 'vga-asus', title: 'VGA Asus'},
               {_id: 'vga-colorful', title: 'VGA Colorful'},
               {_id: 'vga-gigabyte', title: 'VGA Gigabyte'},
               {_id: 'vga-msi', title: 'VGA MSI'},
               {_id: 'vga-galax', title: 'VGA Galax'},
               {_id: 'vga-palit', title: 'VGA Palit'},
               {_id: 'vga-zotac', title: 'VGA Zotac'},
               {_id: 'vga-amd', title: 'VGA AMD'},
               {_id: 'vga-gf-gtx-10-series', title: 'VGA Geforce® 10 GTX'},
               {_id: 'vga-gf-gtx-16-series', title: 'VGA Geforce® 16 GTX'},
               {_id: 'vga-gf-gtx-20-series', title: 'VGA Geforce® 20 GTX'},
               {_id: 'vga-gf-gtx-30-series', title: 'VGA Geforce® 30 GTX'},
               {_id: 'vga-nvidia-quadro', title: 'VGA Nvidia Quadro'},
            ]
         },
         //PHU KIEN KHAC
         {
            title: {_id: 'other-phukienkhac', en: 'Other', vi: 'Phụ kiện khác'},
            items: [
               {_id: 'de-bat-mainboard', title: 'Đế bắt mainboard'},
               {_id: 'nut-nguon', title: 'Nút nguồn'},
               {_id: 'bang-game', title: 'Bảng game'},
            ]
         },
      ]
   },
]