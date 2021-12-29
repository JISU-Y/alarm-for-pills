import React from 'react'
import Button from '../../components/atoms/Button'
import PillCard from '../../components/organisms/PillCard'

const PillSetting = () => {
  return (
    <div>
      Pill setting component
      <PillCard sectionTitle="약" pills={['소화제', '소염제', '위장약']} button={false} />
      <PillCard
        sectionTitle="영양제"
        pills={['종합비타민', '홍삼', '오메가3', '비타민B']}
        button={false}
      />
      <Button label="약 추가하기" />
    </div>
  )
}

export default PillSetting
