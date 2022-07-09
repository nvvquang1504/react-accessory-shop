import './style.scss'
import {Box, Stack} from '@mui/material'
import {useState, useEffect} from "react";
import SBItemContainer from "./SBItemContainer";
import icon1 from '../../assets/icons/Linh-kien-moi.png'
import icon2 from '../../assets/icons/Linh-kien-cu.png'
import icon3 from '../../assets/icons/Thiet-bi-phong-game.png'
import icon4 from '../../assets/icons/May-tinh-de-ban.png'
import icon5 from '../../assets/icons/Man-hinh.png'
import icon6 from '../../assets/icons/Laptop-512-2.png'
import icon7 from '../../assets/icons/SSD-HDD-1.png'
import icon8 from '../../assets/icons/Ban-phim-va-chuot.png'
import icon9 from '../../assets/icons/Thiet-bi-mang-va-may-in.png'
import icon10 from '../../assets/icons/phu-kien-dien-thoai.png'
import icon11 from '../../assets/icons/Music-speaker.png'
import icon12 from '../../assets/icons/Phan-mem-va-phu-kien.png'
import {IoIosArrowForward} from 'react-icons/io'
import {sideBarData} from "../../utils/myData";

const HoverSideBar = (props) => {
   const {active, setActive} = props;
  
   const sideBarArr = [
      {
         _id: 1,
         title: 'Linh kiện mới',
         icon: icon1,
         
      },
      {
         _id: 2,
         title: 'Linh kiện cũ',
         icon: icon2,
      },
      {
         _id: 3,
         title: 'Thiết bị phòng game',
         icon: icon3,
      },
      {
         _id: 4,
         title: 'Máy tính để bàn',
         icon: icon4,
      },
      {
         _id: 5,
         title: 'Màn hình máy tính',
         icon: icon5,
      },
      {
         _id: 6,
         title: 'Laptop',
         icon: icon6,
      },
      {
         _id: 7,
         title: 'Ổ cứng PC',
         icon: icon7,
      },
      {
         _id: 8,
         title: 'Chuột, bàn phím, tai nghe',
         icon: icon8,
      },
      {
         _id: 9,
         title: 'Thiết bị mạng, camera',
         icon: icon9,
      },
      {
         _id: 10,
         title: 'Phụ kiện điện thoại',
         icon: icon10,
      },
      {
         _id: 11,
         title: 'Thiết bị âm thanh',
         icon: icon11,
      },
      {
         _id: 12,
         title: 'Phụ kiện và phần mềm',
         icon: icon12,
      },
   
   ]
   
   return (
      <Box
         className={'hover-side-bar'}
         position={'relative'}
         bgcolor={'secondary.main'}
         borderBottom={'2px solid'}
         borderColor={'secondary.light'}
      >
         {
            sideBarArr.map((item, index) => {
               return <Stack
                  key={item._id}
                  border={'2px solid'}
                  borderColor={'secondary.light'}
                  className="hover-side-bar__item"
                  borderBottom={'none'}
                  direction={'row'}
                  justifyContent={"space-between"}
                  p={1.5}
             
                  onMouseOver={() => {
                     setActive(item._id);
                  }}
               >
                  <Stack
                     direction={'row'}
                     spacing={1}
                     alignItems={'center'}
                     justifyContent={'space-between'}
                  >
                     <div className="main-icons">
                        <img src={item.icon} alt=""/>
                     </div>
                     <div className={'title'}>{item.title}</div>
                  </Stack>
                  <div className="arrow-icon">
                     <IoIosArrowForward fontSize={'1.2rem'}/>
                  </div>
               </Stack>
            })
         }
         {
            sideBarData.map((data, index) => {
               if (active === index + 1) {
                  return (
                     <SBItemContainer setActive={setActive} key={index} data={data}/>
                  )
               } else {
                  return '';
               }
            })
         }
      
      </Box>
   );
};

export default HoverSideBar;