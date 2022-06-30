<template>
    <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
            <div class="branding">
                <a class="navbar-brand mr-4">Grade Hub</a>
            </div>
            <ul v-show="!mobile" class="navigation"></ul>
        </nav>
    </header>
</template>
<script></script>
<style lang='scss' scoped></style>
