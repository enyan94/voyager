<template>
  <modal v-if="active" :close="close" class="tm-modal-receive">
    <div slot="title">Receive Tokens</div>
    <p>
      You can receive Cosmos tokens of any denomination by sharing this address.
    </p>
    <li-copy :value="wallet.address" class="receive-modal" />
  </modal>
</template>

<script>
import { mapGetters } from "vuex"
import LiCopy from "common/TmLiCopy"
import Modal from "common/TmModal"
export default {
  name: `tm-modal-receive`,
  components: {
    LiCopy,
    Modal
  },
  computed: {
    ...mapGetters([`config`, `wallet`]),
    active() {
      return this.config.modals.receive.active
    }
  },
  methods: {
    close() {
      this.$store.commit(`setModalReceive`, false)
    }
  }
}
</script>

<style>
.tm-modal.tm-modal-receive {
  z-index: var(--z-modalError);
}
</style>
