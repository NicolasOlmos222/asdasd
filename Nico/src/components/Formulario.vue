<template>
    <form>
        <label>Nombre:</label>
        <input type="text" placeholder="Nombre">
        <br>
        <label>Email:</label>
        <input type="text" placeholder="Email">
        <br>
        <button>Enviar</button>
    </form>

    <h1>Home Counter: {{ useCounter.count }}</h1>
    <h2>Double: {{ useCounter.double }}</h2>
    <button @click="useCounter.increment">Increment</button>
</template>

<script setup>
    import { useCounterStore } from "..//stores/counter";

    const useCounter = useCounterStore();
</script>

<style>
h1{
    color: red;
}
    label{
        color: black;
    }
</style>