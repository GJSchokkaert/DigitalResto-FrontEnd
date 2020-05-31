<script>
  import Button, { Label } from "@smui/button";
  import Select, { Option } from "@smui/select";
  import { getUsers } from "../Scripts/apiCalls";

  let selectedRole;
  let selectedUser;
  $: buttonDisabled = !(selectedRole && selectedUser);
  $: viewToNavigate =
    "#/" +
    (selectedRole
      ? roles.filter(d => d.id == selectedRole)[0].name.toLowerCase()
      : "");
  // get users from db
  let usersPromise = getUsers();

  // different user roles
  const roles = [
    { id: 1, name: "Bar" },
    { id: 2, name: "Kitchen" },
    { id: 3, name: "Waiter" }
  ];
</script>

<style>
  div {
    font-size: 20px;
  }
</style>

<div class="container">
  <h4>Welcome</h4>
  <p>Please select a user name and role.</p>
  {#await usersPromise then users}
    <Select enhanced bind:value={selectedUser} label="User Name">
      <Option value="" />
      {#each users as user}
        <Option value={user.id} selected={selectedUser == user.id}>
          {user.name}
        </Option>
      {/each}
    </Select>
    <Select enhanced bind:value={selectedRole} label="Role">
      <Option value="" />
      {#each roles as role}
        <Option value={role.id} selected={selectedRole == role.id}>
          {role.name}
        </Option>
      {/each}
    </Select>
    {#if buttonDisabled}
      <Button disabled>
        <Label>
          <a href={viewToNavigate}>Login</a>
        </Label>
      </Button>
    {:else}
      <Button>
        <Label>
          <a href={viewToNavigate}>Login</a>
        </Label>
      </Button>
    {/if}
  {/await}
</div>
