import styled from '@emotion/styled';

export const UserCard = styled.li`
    position: relative;
    width: 380px;
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    padding-bottom: 36px;
`
export const Logo = styled.img`
    position: absolute;
    top: 20px;
    left: 20px;
`

export const Dialogs = styled.img`
    margin-left: 36px;
    margin-top: 28px;
`

export const Line = styled.img`
    display: block;
    margin-top: 18px;
`

export const FotoContainer = styled.div`
    position: absolute;
    left: 145px;
    top: 180px;
    border-radius: 45px;
`
export const Foto = styled.img`
    position: absolute;
    left: 14px;
    top: 9px;

    border-radius: 28px;
`

export const Follow = styled.button`
    width: 196px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    color: #373737;
    border-radius: 10.3108px;
    border: none;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height: 1.22;

    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 56px;
    padding-right: 56px;
    margin-top: 26px;
`

export const Following = styled.button`
    width: 196px;
    background: #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    color: #373737;
    border-radius: 10.3108px;
    border: none;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height: 1.22;

    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 39px;
    padding-right: 39px;
    margin-top: 26px;
`

export const StatisticsContainer = styled.div`
    margin-top: 62px;
    text-align: center;
`

export const TweetsText = styled.p`
    margin-bottom: 0px;

    font-weight: 500;
    font-size: 20px;
    line-height: 1.219;
    color: #EBD8FF;
`

export const FollowersText = styled.p`
    margin-top: 16px;
    margin-bottom: 0px;

    font-weight: 500;
    font-size: 20px;
    line-height: 1.219;
    color: #EBD8FF;
`