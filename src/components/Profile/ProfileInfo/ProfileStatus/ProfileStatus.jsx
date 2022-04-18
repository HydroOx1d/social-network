import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.statusText)

  useEffect(() => {
    setStatus(props.statusText)
  }, [props.statusText])

  const enableEditMode = () => {
    setEditMode(true)
  }

  const disableEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  const onChangeStatusText = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className="profile__status profile__info--inner">
      <div className="profile__info--header">
        <h2 className="profile__info--title">Статус:</h2>
      </div>
      <div className="profile__status--editmod">
        {!editMode && (
          <div
            title={props.isOwner ? 'Нажмите на текст два раза чтобы редактировать его.' : ''}
            onDoubleClick={() => props.isOwner ? enableEditMode() : null}
            className="profile__status--text"
          >
            <span>{props.statusText || "Добавить статус"}</span>
          </div>
        )}
        {editMode && props.isOwner && (
          <div
            title="Чтобы сохранить изменения, кликните на любую часть страницы."
            onBlur={() => disableEditMode()}
            className="profile__status--edit"
          >
            <input
              autoFocus={true}
              type="text"
              value={status}
              onChange={onChangeStatusText}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;

// import React from "react";

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.statusText
//   };

//   enableEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   }

//   disableEditMode = () => {
//     this.props.updateStatus(this.state.status);
//     this.setState({
//       editMode: false,
//     });
//   }

//   onChangeStatusText = (e) => {
//     this.setState({
//       status: e.target.value
//     })
//   }

//   componentDidUpdate = (prevProps, prevState) => {
//     if(prevProps.statusText !== this.props.statusText) {
//       this.setState({
//         status: this.props.statusText,
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="profile__status profile__info--inner">
//         <div className="profile__info--header">
//           <h2 className="profile__info--title">Статус:</h2>
//         </div>
//         <div className="profile__status--editmod">
//           {!this.state.editMode && (
//             <div
//               title="Нажмите на текст два раза чтобы редактировать его."
//               onDoubleClick={() => this.enableEditMode()}
//               className="profile__status--text"
//             >
//               <span>{this.props.statusText || "Добавить статус"}</span>
//             </div>
//           )}
//           {this.state.editMode && (
//             <div
//               title="Чтобы сохранить изменения, кликните на любую часть страницы."
//               onBlur={() => this.disableEditMode()}
//               className="profile__status--edit"
//             >
//               <input
//                 autoFocus={true}
//                 type="text"
//                 value={this.state.status}
//                 onChange={this.onChangeStatusText}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default ProfileStatus;
