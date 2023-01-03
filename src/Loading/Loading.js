import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div>
      <div className={`button is-loading is-large ${styles.loading}`}>
        Loading
      </div>
    </div>
  )
}

export default Loading
