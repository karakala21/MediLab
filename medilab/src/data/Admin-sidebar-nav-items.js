export default function() {
  return [
    {
      title: "Dashboard",
      to: "/AdminDashboard",
      htmlBefore: '<i class="material-icons">developer_board</i>',
      htmlAfter: ""
    },
    {
      title: "Manage Tests",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/ManageTests",
    },
    {
      title: "Add New Tests",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-Test",
    },
    {
      title: "Appointments",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/StatusActions",
    },
    {
      title: "Manage Employee",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/manage-employee",
    },
    {
      title: "Add Empolyee",
      htmlBefore: '<i class="material-icons">person_add</i>',
      to: "/add-employee",
    },
  ];
}
