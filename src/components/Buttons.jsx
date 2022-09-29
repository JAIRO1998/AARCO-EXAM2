import React from 'react'

export const Buttons = () => {
  return (
    <td>
      <div className="d-none d-lg-block .d-xl-none">
        <button type="button" class="btn btn-primary btn-sm me-1 rounded-circle"><i class="fa-regular fa-eye"></i></button>
        <button type="button" class="btn btn-primary btn-sm me-1 rounded-circle"><i class="fa-solid fa-download"></i></button>
        <button type="button" class="btn btn-primary btn-sm me-1 rounded-circle"><i class="fa-sharp fa-solid fa-share-nodes"></i></button>
      </div>
      <div className="d-lg-none d-xl-block d-xl-none d-xxl-none d-xxl-block">
        <button type="button" class="btn btn-primary btn-sm me-1 rounded-circle"><i class="fa-solid fa-caret-down"></i></button>
      </div>
    </td>
  )
}
