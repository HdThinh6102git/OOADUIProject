import "./rightbar.scss"
import ProfileImg from "../../assets/profile/boyChild.jpg"
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* First item */}
        <div className="item">
          <span>Suggests For You</span>
          {/* First User */}
          <div className="user">
            <div className="userInfo">
              <img src={ProfileImg} alt="" />
              <span>Tam Nhu</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button >dismiss</button>
            </div>
          </div>
          {/* Second User */}
          <div className="user">
            <div className="userInfo">
              <img src={ProfileImg} alt="" />
              <span>Minh Nhat</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button >dismiss</button>
            </div>
          </div>
        </div>
        {/* Second item */}
        <div className="item">
              <span>Last Activities</span>
              {/* First User */}
              <div className="user">
                    <div className="userInfo">
                          <img src={ProfileImg} alt="" />
                          <p>
                          <span>Minh Nhat </span> changed their cover picture
                          </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                {/* Second User */}
                <div className="user">
                    <div className="userInfo">
                          <img src={ProfileImg} alt="" />
                          <p>
                          <span>Minh Nhat </span> changed their cover picture
                          </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                {/* Third User */}
                <div className="user">
                    <div className="userInfo">
                          <img src={ProfileImg} alt="" />
                          <p>
                          <span>Minh Nhat </span> changed their cover picture
                          </p>
                    </div>
                    <span>1 min ago</span>
                </div>
        </div>
        {/* Third Item */}
        <div className="item">
            <span>Online Friends</span>
            {/* First User */}
                <div className="user">
                      <div className="userInfo">
                            <img src={ProfileImg} alt="" />
                            <div className="online"/>
                            <span>Minh Nhat</span> 
                      </div>
                </div>
            {/* Second User */}
                <div className="user">
                        <div className="userInfo">
                              <img src={ProfileImg} alt="" />
                              <div className="online"/>
                              <span>Tam Nhu</span> 
                        </div>
                  </div>
              {/* Third User */}
                    <div className="user">
                            <div className="userInfo">
                                  <img src={ProfileImg} alt="" />
                                  <div className="online"/>
                                  <span>Khanh Linh</span> 
                            </div>
                      </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar