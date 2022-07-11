import './style.scss'
import {Box, Stack} from '@mui/material'
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
import {useSelector} from "react-redux";

const HoverSideBar = (props) => {
   const {active, setActive} = props;
   const sideBarData = useSelector((state) => {
      return state.menu.data;
   })
   const sideBarArr =useSelector((state) => {
      return state.menu.list;
   })
   
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