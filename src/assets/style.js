import styled from "styled-components";

export const View = styled.div`
    display: ${(props) => props.display};
    cursor: ${(props) => props.cursor};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.size}%;
    position: fixed;
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background} !important;
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top: 0;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left: 0;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const Component = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper});
    display: ${(props) => props.display};
    cursor: ${(props) => props.cursor};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background} !important;
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const Object = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper});
    display: ${(props) => props.display};
    cursor: ${(props) => props.cursor};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    outline:${(props) => props.outline};
    border: 1px solid #3d4f6825;
    box-shadow: 0 0 10px 0 #3d4f6810;
    background:#ffffff;
    border-radius: .7em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding: 12px .9em 12px .9em;
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const SideControl = styled.div`
    width: 100%;
    height: 100%;
`

export const UserMessage = styled.div`
    padding: 3px 1em 7px 1em;
    border-radius: 1em 1em 5px 1em;
    background: #005eff;
    float: right;
    margin-top: 1em;
    color: #fff;
`

export const ClientMessage = styled.div`
    padding: 3px 1em 7px 1em;
    border-radius: 1em 1em 1em 5px;
    border: 1.5px solid #25324615;
    box-shadow: 0 0 10px 0 #25324610;
    background: #ffffff;
    float: left;
    margin-top: 1em;
    color: #39404b;
`

export const MeterBar = styled.div`
    width: 100%;
    height: 6px;
    display: flex;
    overflow: hidden;
    justify-content: start;
    align-items: center;
    border-radius: 2em;
    margin-top: ${(props) => props.mt}em;
`

export const Meter = styled.div`
    width: ${(props) => props.count}%;
    height: inherit;
    border-radius: 4px;
`

export const TopBar = styled.div`
    width: ${(props) => props.size}%;
    border-radius: ${(props) => props.radius}em;
    padding: 7px .55em 7px .55em;
    margin: 0 auto;
    margin-top: ${(props) => props.mt}em;
`

export const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-right: 3;
    margin-top: ${(props) => props.mt}em;
`

export const Mid = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    right: 0;
    padding-right: 3.75em;
`

export const Left = styled.div`
    float: left
`

export const Right = styled.div`
    float: right
`

export const Label = styled.label`
    box-sizing: content-box;
        display: ${(props) => props.display};
    cursor: ${(props) => props.cursor};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background} !important;
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const InputText = styled.input`
    display: ${(props) => props.display};
    outline: ${(props) => props.outline};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    text-align:${(props) => props.textAlign};
    text-indent:${(props) => props.textGap}em;
    &::placeholder {
    opacity: .8;
    }
`

export const PageIndicator = styled.div`
    width: 100%;
    position: fixed;
    padding: 1em 5px 5px 5px;
    margin-left: -2%;
    z-index: 9;
    backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

export const Blocker = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    background: #29313a30;
    z-index: ${(props) => props.index};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`

export const Indicator = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
`

export const AvatarStack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2em;
    margin-left: -1em;
    overflow: hidden;
    float: left;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    border: 3px solid #ebf0f5;
    border-radius: 5em;
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    & img {
    position: absolute;
    width: inherit;
    }
`

export const Inder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    background: #fff;
    border: 1.5px solid #dde4ebc2;
    // box-shadow: 0 0 5px 0 rgba(170, 187, 203, 0.7);
    border-radius: 7px;
`

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    border-radius: 5em;
    overflow: hidden;
    margin-top:${(props) => props.mt}em;
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    scale: ${(props) => props.scale};
    cursor: pointer;
    & img {
    width: 100%
    }
`

export const WindowStateControl = styled.div`
    display: flex;
    border-radius: 2em;
    padding: 0;
    background: #fff;
    border: 1.5px solid #dde4ebc2;
`

export const SpaceBetween = styled.div`
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    opacity: .5;
`

export const Hr_Y = styled.div`
    width: 2.5px;
    height: 1.5em;
    opacity: .5;
    border-radius: 1em;
    background: #6c7885;
`

export const Hr_X = styled.div`
    width: 1.5em;
    height: 2.5px;
    opacity: .2;
    margin: 0 auto;
    border-radius: 1em;
    background: #6c7885;
`

export const Hr_Xopt = styled.div`
    width: 1em;
    height: 2.5px;
    opacity: .2;
    padding: 0 3px 0 3px;
    margin: 0 auto;
    border-radius: 1em;
    background: #6c7885;
`

export const Button = styled.div`
    padding: 7px 10px 7px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: ${(props) => props.radius}em;
`

export const Toggle = styled.div`
    width: 2.3em;
    padding: 2px;
    display: flex;
    align-items: center;
    border-radius: 3em;
    background: #f5f8fb;
    border: 1px solid #c7cfd790;
    box-shadow: inset 0 0 5px 0 #c7cfd790;
`

export const Toggler = styled.div`
    padding: 9px;
    scale: .95;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3em;
    background: #ffffff;
`

export const Icon = styled.img`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}em;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    position:${(props) => props.position};
    scale:${(props) => props.scale};
    cursor:${(props) => props.cursor};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    transform:${(props) => props.transform}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
`

export const Text = styled.text`
    position:${(props) => props.position};
    font-size:${(props) => props.size}em !important;
    opacity:${(props) => props.opacity};
    scale:${(props) => props.scale};
    color: ${(props) => props.color};
    z-index: ${(props) => props.index};
    line-height: ${(props) => props.lnh};
`