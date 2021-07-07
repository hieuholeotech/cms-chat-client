import React from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';

const Chat = () => {
  const { oidcUser } = useReactOidc();
  return (
    <>
     <div class="menu">
            <div class="back">
              <a href="/"><i class="fa fa-chevron-left"></i> <img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></a>
            </div>
            <div class="name">{oidcUser.profile.name}</div>
            <div class="last">18:09</div>
        </div>
    <ol class="chat">
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>Hey!</p>
        <p>Làm bài tập chưa m? Cho ké phát<emoji class="pizza"/></p>
        <time>20:17</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Thôi xin...</p>
        <p>Tự làm đi bro <emoji class="books"/></p>
        <p>Dễ mà</p>
        <time>20:18</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>Chịu á, tìm mãi không ra <emoji class="suffocated"/></p>
        <time>20:18</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Oke đợi xí nữa gửi cho</p>
        <p>Tham khảo thôi hỉ...</p>
        <time>20:18</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p><emoji class="scream"/></p>
        <p>Thank uuuuuu! <emoji class="please"/></p>
        <time>20:18</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <img src="https://i.imgur.com/QAROObc.jpg" draggable="false"/>
        <time>20:19</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>Yêu liền! <emoji class="hearth_blue"/></p>
        <time>20:20</time>
      </div>
    </li>
        <div class="day">No seen</div>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Xí nữa làm trân liên minh chớ?</p>
        <time>18:03</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>Thôi để làm bài tập</p>
        <time>18:07</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Này chơi mình buồn quá, đánh thì gãy <emoji class="cryalot"/></p>
        <time>18:08</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p><emoji class="lmao"/></p>
        <time>18:08</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Riết muốn xóa game luôn đây</p>
        <p><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span></p>
        <time>18:09</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
          <p>Haha, luyện thêm đi</p>
        <p><emoji class="funny"/></p>
        <time>18:08</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Oke</p>
        <time>18:09</time>
      </div>
    </li>
    </ol>
    <input class="textarea" type="text" placeholder="Nhập tin nhắn..."/><div class="emojis"></div>
    </>
  );
};

// adding the oidc user in the props
export default Chat;
