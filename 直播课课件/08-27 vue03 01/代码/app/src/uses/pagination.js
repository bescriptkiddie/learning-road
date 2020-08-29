import {computed, onMounted} from 'vue';

function usePagination(props) {

    onMounted(() => {
        console.log('onMounted');
    })

    let pages = computed(() => {
        return Math.ceil(props.total / 4);
    })


    return pages;
}

export default usePagination;