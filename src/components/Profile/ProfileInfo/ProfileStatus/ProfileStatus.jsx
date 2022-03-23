import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.statusText
  };

  enableEditMode = () => {
    this.setState({
      editMode: true,
    });
  }

  disableEditMode = () => {
    this.props.updateStatus(this.state.status);
    this.setState({
      editMode: false,
    });
  }

  onChangeStatusText = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.statusText !== this.props.statusText) {
      this.setState({
        status: this.props.statusText,
      });
    }
  }

  render() {
    return (
      <div className="profile__status profile__info--inner">
        <div className="profile__info--header">
          <h2 className="profile__info--title">Статус:</h2>
        </div>
        <div className="profile__status--editmod">
          {!this.state.editMode && (
            <div
              title="Нажмите на текст два раза чтобы редактировать его."
              onDoubleClick={() => this.enableEditMode()}
              className="profile__status--text"
            >
              <span>{this.props.statusText || "Добавить статус"}</span>
            </div>
          )}
          {this.state.editMode && (
            <div
              title="Чтобы сохранить изменения, кликните на любую часть страницы."
              onBlur={() => this.disableEditMode()}
              className="profile__status--edit"
            >
              <input
                autoFocus={true}
                type="text"
                value={this.state.status}
                onChange={this.onChangeStatusText}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
