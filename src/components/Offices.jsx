import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Surat" invert={invert}>
          4/3389, Hatimi Manzi
          <br />
          Near Choice Corner,
          HK Street, Begampura
          <br />
          Zampa Bazar, Surat
        </Office>
      </li>
      <li>
        <Office name="Mobile Number" invert={invert}>
          9825419758
          <br />
          8160053352
        </Office>
      </li>
    </ul>
  )
}
