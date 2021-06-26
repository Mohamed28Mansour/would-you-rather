import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

const LeaderboardList = ({ users }) => {
  const getSortedUsersWithScore = (usersArray) => {
    return usersArray
      .map((user) => {
        const score = Object.keys(user.answers).length + user.questions.length;
        return { ...user, score };
      })
      .sort((a, b) => b.score - a.score);
  };

  const sortedUsers = getSortedUsersWithScore(users);

  return (
    <div>
      {sortedUsers.map((user) => {
        return (
          <UserCard
            key={user.id}
            name={user.name}
            avatar={user.avatarURL}
            createdQuestions={user.questions.length}
            answered={Object.keys(user.answers).length}
            score={user.score}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(LeaderboardList);
