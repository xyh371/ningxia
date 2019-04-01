<template>
  <div class="dataList">
    <div v-for="(v, i) in data.List" :key="i" class="center">
      <dl>
        <dd>
          <img :src="v.img" alt="">
        </dd>
        <dt>
          <div class="noe">
            <h3>{{v.titlt}}</h3>
            <p>{{v.Scenic}}</p>
          </div>
          <div class="tow">
            <p>{{v.introduce1}}</p>
            <p>{{v.introduce2}}</p>
          </div>
          <div class="file">
            <p>{{v.branch}}</p>
            <p>{{v.evaluate}}</p>
            <span>￥<b>{{v.price}}</b>起</span>
          </div>
          <div class="si">
            <p>{{v.distance}}</p>
            <p>{{v.Sell}}</p>
          </div>
        </dt>
      </dl>
    </div>
    <div v-for="(v, i) in List.List" :key="i+ '1'" class="center">
      <dl>
        <dd>
          <img :src="v.img" alt="">
        </dd>
        <dt>
          <div class="noe">
            <h3>{{v.titlt}}</h3>
            <p>{{v.Scenic}}</p>
          </div>
          <div class="tow">
            <p>{{v.introduce1}}</p>
            <p>{{v.introduce2}}</p>
          </div>
          <div class="file">
            <p>{{v.branch}}</p>
            <p>{{v.evaluate}}</p>
            <span>￥<b>{{v.price}}</b>起</span>
          </div>
          <div class="si">
            <p>{{v.distance}}</p>
            <p>{{v.Sell}}</p>
          </div>
        </dt>
      </dl>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DataList',
  props: ['data', 'List']
}
</script>

<style lang="scss" scoped>
  .center {
    width: 100%;
    height: 226px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    dl {
      width: 100%;
      height: 206px;
      display: flex;
      padding:0 32px;
      box-sizing: border-box;
      dd {
          width: 206px;
          height: 206px;
          margin-right: 30px;
          box-sizing: border-box;
        img {
          height: 100%;
          width: 100%;
          border-radius: 4px;
          box-sizing: border-box;
        }
      }
      dt {
        font-size: 32px;
        .noe {
          display: flex;
          align-items: center;
          p {
            background: #FC6120;
            width: 100px;
            height: 30px;
            border-radius: 30px;
            color: #fff;
            line-height: 35px;
            text-align: center;
            font-size: 12px;
            margin-left: 29px;
          }
        }
        .tow {
          display: flex;
          margin-top: 23px;
          p {
            width: 120px;
            height: 34;
            line-height: 40px;
            text-align: center;
            border: 1px solid #FC6120;
            font-size: 12px;
          }
          p:nth-of-type(2) {
            margin-left: 14px;
          }
        }
        .file {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          p {
            width: 150px;
          }
          span {
            color: #FC6120;
            font-size: 12px;
            margin-left: 126px;
            b {
              font-size: 32px;
              color: #FC6120;
            }
          }
          p:nth-of-type(1) {
            color: #FC6120;
            margin-right: 12px;
            width: 80px;
          }
        }
        .si {
          display: flex;
          justify-content: space-between;
          color: #999999;
          font-size: 22px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
