App.messages = App.cable.subscriptions.create('MessagesChannel', {  
  received: function(data) {
    var messagediv = this.renderMessage(data);
    if (messagediv === 42) {
      return;
    }
    // var notification = new Audio('http://onj3.andrelouis.com/phonetones/unzipped/Huawei/Huawei%20Ascend%20P6/notifications/Hand_Drum.ogg');
    // notification.play();
    return $('.message-box').prepend(messagediv);
  },

  renderMessage: function(data) {
    var groupName = document.querySelector('#groupname').innerText;
    var userName = document.querySelector('#username').innerText;

    if (groupName !== data.groupName) {
      return 42;
    }
    
    var messageDiv = document.createElement('div');
    
    if (userName === data.user) {
      messageDiv.classList.add('message-right');
    } else {
      messageDiv.classList.add('message-left');
    }
    
    var userNameP = document.createElement('p');
    userNameP.classList.add('user-name');
    userNameP.innerText = data.user;
    var textP = document.createElement('p');
    textP.innerText = data.message;

    messageDiv.append(userNameP);
    messageDiv.append(textP);

    return messageDiv;
  }
});