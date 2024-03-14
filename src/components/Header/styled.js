import styled from 'styled-components';

export const AreaHeader = styled.div`
   height: 60px;
   background-color: #345;
   color: #fff;

   .container{
    padding: 5px 20px;
    display: flex;
    align-items: center;
    z-index: 999;
   }

   .logo{
    flex: 1;

       img{
        width: 60px;
       }
   }

   nav{
    ul{
        display:flex;

        li{
            list-style: none;
            margin-left: 20px;
            a{
                text-decoration: none;
                color: #fff;
                &:hover{
                    color:#345;
                    background-color: #fff;
                    padding:22px;
                }
            }
        }
    }
   }
`;
