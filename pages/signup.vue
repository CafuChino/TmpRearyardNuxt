<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[100vh]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max"
                required
              />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                required
              />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
            />
          </div>
          <Button
            type="submit"
            class="w-full"
          >
            Create an account
          </Button>
          <Button
            variant="outline"
            class="w-full"
          >
            Sign up with GitHub
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <a
            href="/login"
            class="underline"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
