function skillsMember() {
      return {
    name: 'SkillsMember',
    skills: [],
    addSkill(skill) {
      this.skills.push(skill);
    },
    getSkills() {
      return this.skills;
    },
  };
}